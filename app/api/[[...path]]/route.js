import { NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'

let client
let db

async function connectDB() {
  if (!client) {
    client = new MongoClient(process.env.MONGO_URL)
    await client.connect()
    db = client.db('scriza_website')
  }
  return db
}

// Handle POST requests for contact form submissions
export async function POST(request, { params }) {
  try {
    const path = params.path?.join('/') || ''
    
    if (path === 'contact') {
      const database = await connectDB()
      const body = await request.json()
      
      const contactData = {
        ...body,
        timestamp: new Date(),
        status: 'new'
      }
      
      const result = await database.collection('contacts').insertOne(contactData)
      
      return NextResponse.json({ 
        success: true, 
        message: 'Contact form submitted successfully',
        id: result.insertedId 
      })
    }
    
    return NextResponse.json({ error: 'Endpoint not found' }, { status: 404 })
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' }, 
      { status: 500 }
    )
  }
}

// Handle GET requests for retrieving data
export async function GET(request, { params }) {
  try {
    const path = params.path?.join('/') || ''
    const url = new URL(request.url)
    const searchParams = url.searchParams
    
    if (path === 'contacts') {
      const database = await connectDB()
      
      // Get pagination parameters
      const page = parseInt(searchParams.get('page')) || 1
      const limit = parseInt(searchParams.get('limit')) || 10
      const skip = (page - 1) * limit
      
      // Get filter parameters
      const status = searchParams.get('status')
      const type = searchParams.get('type')
      
      let filter = {}
      if (status) filter.status = status
      if (type) filter.type = type
      
      const contacts = await database.collection('contacts')
        .find(filter)
        .sort({ timestamp: -1 })
        .skip(skip)
        .limit(limit)
        .toArray()
      
      const total = await database.collection('contacts').countDocuments(filter)
      
      return NextResponse.json({
        contacts,
        pagination: {
          page,
          limit,
          total,
          totalPages: Math.ceil(total / limit)
        }
      })
    }
    
    if (path === 'stats') {
      const database = await connectDB()
      
      const totalContacts = await database.collection('contacts').countDocuments()
      const newContacts = await database.collection('contacts').countDocuments({ status: 'new' })
      const demoRequests = await database.collection('contacts').countDocuments({ type: 'demo' })
      const contactRequests = await database.collection('contacts').countDocuments({ type: 'contact' })
      
      return NextResponse.json({
        totalContacts,
        newContacts,
        demoRequests,
        contactRequests
      })
    }
    
    return NextResponse.json({ error: 'Endpoint not found' }, { status: 404 })
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' }, 
      { status: 500 }
    )
  }
}

// Handle PUT requests for updating data
export async function PUT(request, { params }) {
  try {
    const path = params.path?.join('/') || ''
    
    if (path.startsWith('contacts/')) {
      const database = await connectDB()
      const contactId = path.split('/')[1]
      const body = await request.json()
      
      const result = await database.collection('contacts').updateOne(
        { _id: new ObjectId(contactId) },
        { $set: { ...body, updatedAt: new Date() } }
      )
      
      if (result.matchedCount === 0) {
        return NextResponse.json({ error: 'Contact not found' }, { status: 404 })
      }
      
      return NextResponse.json({ 
        success: true, 
        message: 'Contact updated successfully' 
      })
    }
    
    return NextResponse.json({ error: 'Endpoint not found' }, { status: 404 })
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' }, 
      { status: 500 }
    )
  }
}

// Handle DELETE requests
export async function DELETE(request, { params }) {
  try {
    const path = params.path?.join('/') || ''
    
    if (path.startsWith('contacts/')) {
      const database = await connectDB()
      const contactId = path.split('/')[1]
      
      const result = await database.collection('contacts').deleteOne(
        { _id: new ObjectId(contactId) }
      )
      
      if (result.deletedCount === 0) {
        return NextResponse.json({ error: 'Contact not found' }, { status: 404 })
      }
      
      return NextResponse.json({ 
        success: true, 
        message: 'Contact deleted successfully' 
      })
    }
    
    return NextResponse.json({ error: 'Endpoint not found' }, { status: 404 })
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' }, 
      { status: 500 }
    )
  }
}