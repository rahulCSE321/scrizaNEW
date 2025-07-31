#!/usr/bin/env python3
"""
Backend API Testing Script for Scriza Website
Tests all backend endpoints and database functionality
"""

import requests
import json
import time
import sys
from datetime import datetime

# Get base URL from environment
BASE_URL = "https://a31d3fe1-4724-46ac-b6f5-6926cc402651.preview.emergentagent.com"
API_BASE = f"{BASE_URL}/api"

class BackendTester:
    def __init__(self):
        self.test_results = []
        self.total_tests = 0
        self.passed_tests = 0
        self.failed_tests = 0
        
    def log_test(self, test_name, passed, message=""):
        """Log test result"""
        self.total_tests += 1
        if passed:
            self.passed_tests += 1
            status = "✅ PASS"
        else:
            self.failed_tests += 1
            status = "❌ FAIL"
            
        result = f"{status} - {test_name}"
        if message:
            result += f": {message}"
            
        print(result)
        self.test_results.append({
            'test': test_name,
            'passed': passed,
            'message': message,
            'timestamp': datetime.now().isoformat()
        })
        
    def test_contact_form_submission(self):
        """Test POST /api/contact endpoint"""
        print("\n=== Testing Contact Form Submission ===")
        
        # Test 1: Valid demo request submission
        demo_data = {
            "name": "John Smith",
            "email": "john.smith@example.com",
            "phone": "+1-555-0123",
            "company": "Tech Solutions Inc",
            "message": "I would like to schedule a demo of your software development services.",
            "type": "demo"
        }
        
        try:
            response = requests.post(f"{API_BASE}/contact", 
                                   json=demo_data, 
                                   headers={'Content-Type': 'application/json'},
                                   timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if data.get('success') and data.get('message') and data.get('id'):
                    self.log_test("Contact form - Demo request submission", True, 
                                f"Successfully submitted with ID: {data.get('id')}")
                else:
                    self.log_test("Contact form - Demo request submission", False, 
                                f"Invalid response structure: {data}")
            else:
                self.log_test("Contact form - Demo request submission", False, 
                            f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_test("Contact form - Demo request submission", False, f"Exception: {str(e)}")
            
        # Test 2: Valid contact request submission
        contact_data = {
            "name": "Sarah Johnson",
            "email": "sarah.johnson@company.com",
            "phone": "+1-555-0456",
            "company": "Digital Innovations LLC",
            "message": "We need custom software development for our fintech project.",
            "type": "contact"
        }
        
        try:
            response = requests.post(f"{API_BASE}/contact", 
                                   json=contact_data, 
                                   headers={'Content-Type': 'application/json'},
                                   timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if data.get('success') and data.get('message') and data.get('id'):
                    self.log_test("Contact form - Contact request submission", True, 
                                f"Successfully submitted with ID: {data.get('id')}")
                else:
                    self.log_test("Contact form - Contact request submission", False, 
                                f"Invalid response structure: {data}")
            else:
                self.log_test("Contact form - Contact request submission", False, 
                            f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_test("Contact form - Contact request submission", False, f"Exception: {str(e)}")
            
        # Test 3: Minimal required data submission
        minimal_data = {
            "name": "Mike Wilson",
            "email": "mike.wilson@test.com",
            "type": "demo"
        }
        
        try:
            response = requests.post(f"{API_BASE}/contact", 
                                   json=minimal_data, 
                                   headers={'Content-Type': 'application/json'},
                                   timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if data.get('success'):
                    self.log_test("Contact form - Minimal data submission", True, 
                                "Successfully submitted with minimal data")
                else:
                    self.log_test("Contact form - Minimal data submission", False, 
                                f"Failed with minimal data: {data}")
            else:
                self.log_test("Contact form - Minimal data submission", False, 
                            f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_test("Contact form - Minimal data submission", False, f"Exception: {str(e)}")
            
        # Test 4: Invalid JSON submission
        try:
            response = requests.post(f"{API_BASE}/contact", 
                                   data="invalid json", 
                                   headers={'Content-Type': 'application/json'},
                                   timeout=10)
            
            if response.status_code == 500:
                self.log_test("Contact form - Invalid JSON handling", True, 
                            "Correctly returned 500 for invalid JSON")
            else:
                self.log_test("Contact form - Invalid JSON handling", False, 
                            f"Expected 500, got {response.status_code}")
                
        except Exception as e:
            self.log_test("Contact form - Invalid JSON handling", False, f"Exception: {str(e)}")
            
    def test_contacts_retrieval(self):
        """Test GET /api/contacts endpoint"""
        print("\n=== Testing Contacts Retrieval ===")
        
        # Test 1: Basic contacts retrieval
        try:
            response = requests.get(f"{API_BASE}/contacts", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if 'contacts' in data and 'pagination' in data:
                    contacts = data['contacts']
                    pagination = data['pagination']
                    
                    # Check pagination structure
                    required_pagination_fields = ['page', 'limit', 'total', 'totalPages']
                    if all(field in pagination for field in required_pagination_fields):
                        self.log_test("Contacts retrieval - Basic functionality", True, 
                                    f"Retrieved {len(contacts)} contacts with proper pagination")
                    else:
                        self.log_test("Contacts retrieval - Basic functionality", False, 
                                    f"Missing pagination fields: {pagination}")
                else:
                    self.log_test("Contacts retrieval - Basic functionality", False, 
                                f"Invalid response structure: {list(data.keys())}")
            else:
                self.log_test("Contacts retrieval - Basic functionality", False, 
                            f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_test("Contacts retrieval - Basic functionality", False, f"Exception: {str(e)}")
            
        # Test 2: Pagination parameters
        try:
            response = requests.get(f"{API_BASE}/contacts?page=1&limit=5", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                pagination = data.get('pagination', {})
                if pagination.get('page') == 1 and pagination.get('limit') == 5:
                    self.log_test("Contacts retrieval - Pagination parameters", True, 
                                "Pagination parameters working correctly")
                else:
                    self.log_test("Contacts retrieval - Pagination parameters", False, 
                                f"Pagination mismatch: {pagination}")
            else:
                self.log_test("Contacts retrieval - Pagination parameters", False, 
                            f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_test("Contacts retrieval - Pagination parameters", False, f"Exception: {str(e)}")
            
        # Test 3: Filter by type
        try:
            response = requests.get(f"{API_BASE}/contacts?type=demo", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                contacts = data.get('contacts', [])
                # Check if all returned contacts have type 'demo' (if any exist)
                if not contacts or all(contact.get('type') == 'demo' for contact in contacts):
                    self.log_test("Contacts retrieval - Type filter", True, 
                                "Type filtering working correctly")
                else:
                    self.log_test("Contacts retrieval - Type filter", False, 
                                "Type filtering not working properly")
            else:
                self.log_test("Contacts retrieval - Type filter", False, 
                            f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_test("Contacts retrieval - Type filter", False, f"Exception: {str(e)}")
            
        # Test 4: Filter by status
        try:
            response = requests.get(f"{API_BASE}/contacts?status=new", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                contacts = data.get('contacts', [])
                # Check if all returned contacts have status 'new' (if any exist)
                if not contacts or all(contact.get('status') == 'new' for contact in contacts):
                    self.log_test("Contacts retrieval - Status filter", True, 
                                "Status filtering working correctly")
                else:
                    self.log_test("Contacts retrieval - Status filter", False, 
                                "Status filtering not working properly")
            else:
                self.log_test("Contacts retrieval - Status filter", False, 
                            f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_test("Contacts retrieval - Status filter", False, f"Exception: {str(e)}")
            
    def test_stats_endpoint(self):
        """Test GET /api/stats endpoint"""
        print("\n=== Testing Statistics Endpoint ===")
        
        try:
            response = requests.get(f"{API_BASE}/stats", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                required_fields = ['totalContacts', 'newContacts', 'demoRequests', 'contactRequests']
                
                if all(field in data for field in required_fields):
                    # Check if all values are numbers
                    if all(isinstance(data[field], int) for field in required_fields):
                        self.log_test("Statistics endpoint - Basic functionality", True, 
                                    f"Stats: Total={data['totalContacts']}, New={data['newContacts']}, "
                                    f"Demo={data['demoRequests']}, Contact={data['contactRequests']}")
                    else:
                        self.log_test("Statistics endpoint - Basic functionality", False, 
                                    f"Non-numeric values in stats: {data}")
                else:
                    self.log_test("Statistics endpoint - Basic functionality", False, 
                                f"Missing required fields. Got: {list(data.keys())}")
            else:
                self.log_test("Statistics endpoint - Basic functionality", False, 
                            f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_test("Statistics endpoint - Basic functionality", False, f"Exception: {str(e)}")
            
    def test_data_persistence(self):
        """Test data persistence and structure"""
        print("\n=== Testing Data Persistence ===")
        
        # Submit a test contact and then verify it appears in the list
        test_contact = {
            "name": "Test User for Persistence",
            "email": "persistence.test@example.com",
            "phone": "+1-555-9999",
            "company": "Test Company",
            "message": "This is a test message for data persistence verification.",
            "type": "demo"
        }
        
        try:
            # Submit the contact
            submit_response = requests.post(f"{API_BASE}/contact", 
                                          json=test_contact, 
                                          headers={'Content-Type': 'application/json'},
                                          timeout=10)
            
            if submit_response.status_code == 200:
                submit_data = submit_response.json()
                contact_id = submit_data.get('id')
                
                # Wait a moment for data to be stored
                time.sleep(1)
                
                # Retrieve contacts and look for our test contact
                retrieve_response = requests.get(f"{API_BASE}/contacts", timeout=10)
                
                if retrieve_response.status_code == 200:
                    retrieve_data = retrieve_response.json()
                    contacts = retrieve_data.get('contacts', [])
                    
                    # Look for our test contact
                    found_contact = None
                    for contact in contacts:
                        if contact.get('email') == test_contact['email']:
                            found_contact = contact
                            break
                    
                    if found_contact:
                        # Verify all fields are present and correct
                        fields_correct = True
                        missing_fields = []
                        
                        # Check required fields
                        for field in ['name', 'email', 'type']:
                            if found_contact.get(field) != test_contact[field]:
                                fields_correct = False
                                missing_fields.append(f"{field}: expected {test_contact[field]}, got {found_contact.get(field)}")
                        
                        # Check if timestamp and status were added
                        if 'timestamp' not in found_contact:
                            fields_correct = False
                            missing_fields.append("timestamp field missing")
                            
                        if found_contact.get('status') != 'new':
                            fields_correct = False
                            missing_fields.append(f"status: expected 'new', got {found_contact.get('status')}")
                        
                        if fields_correct:
                            self.log_test("Data persistence - Contact storage and retrieval", True, 
                                        "Contact stored and retrieved correctly with proper structure")
                        else:
                            self.log_test("Data persistence - Contact storage and retrieval", False, 
                                        f"Field mismatches: {', '.join(missing_fields)}")
                    else:
                        self.log_test("Data persistence - Contact storage and retrieval", False, 
                                    "Submitted contact not found in retrieval")
                else:
                    self.log_test("Data persistence - Contact storage and retrieval", False, 
                                f"Failed to retrieve contacts: HTTP {retrieve_response.status_code}")
            else:
                self.log_test("Data persistence - Contact storage and retrieval", False, 
                            f"Failed to submit test contact: HTTP {submit_response.status_code}")
                
        except Exception as e:
            self.log_test("Data persistence - Contact storage and retrieval", False, f"Exception: {str(e)}")
            
    def test_error_handling(self):
        """Test error handling for various scenarios"""
        print("\n=== Testing Error Handling ===")
        
        # Test 1: Invalid endpoint
        try:
            response = requests.get(f"{API_BASE}/invalid-endpoint", timeout=10)
            
            if response.status_code == 404:
                data = response.json()
                if data.get('error') == 'Endpoint not found':
                    self.log_test("Error handling - Invalid endpoint", True, 
                                "Correctly returned 404 for invalid endpoint")
                else:
                    self.log_test("Error handling - Invalid endpoint", False, 
                                f"Wrong error message: {data}")
            else:
                self.log_test("Error handling - Invalid endpoint", False, 
                            f"Expected 404, got {response.status_code}")
                
        except Exception as e:
            self.log_test("Error handling - Invalid endpoint", False, f"Exception: {str(e)}")
            
        # Test 2: POST to invalid endpoint
        try:
            response = requests.post(f"{API_BASE}/invalid-post", 
                                   json={"test": "data"}, 
                                   headers={'Content-Type': 'application/json'},
                                   timeout=10)
            
            if response.status_code == 404:
                data = response.json()
                if data.get('error') == 'Endpoint not found':
                    self.log_test("Error handling - Invalid POST endpoint", True, 
                                "Correctly returned 404 for invalid POST endpoint")
                else:
                    self.log_test("Error handling - Invalid POST endpoint", False, 
                                f"Wrong error message: {data}")
            else:
                self.log_test("Error handling - Invalid POST endpoint", False, 
                            f"Expected 404, got {response.status_code}")
                
        except Exception as e:
            self.log_test("Error handling - Invalid POST endpoint", False, f"Exception: {str(e)}")
            
    def test_database_connection(self):
        """Test database connectivity by checking if endpoints respond"""
        print("\n=== Testing Database Connection ===")
        
        # Test database connection by trying to get stats (requires DB connection)
        try:
            response = requests.get(f"{API_BASE}/stats", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if isinstance(data.get('totalContacts'), int):
                    self.log_test("Database connection - Connectivity test", True, 
                                "Database connection working (stats endpoint responsive)")
                else:
                    self.log_test("Database connection - Connectivity test", False, 
                                "Stats endpoint returned invalid data structure")
            else:
                self.log_test("Database connection - Connectivity test", False, 
                            f"Stats endpoint failed: HTTP {response.status_code}")
                
        except Exception as e:
            self.log_test("Database connection - Connectivity test", False, f"Exception: {str(e)}")
            
    def run_all_tests(self):
        """Run all backend tests"""
        print("🚀 Starting Scriza Backend API Tests")
        print(f"Testing against: {API_BASE}")
        print("=" * 60)
        
        # Run all test suites
        self.test_database_connection()
        self.test_contact_form_submission()
        self.test_contacts_retrieval()
        self.test_stats_endpoint()
        self.test_data_persistence()
        self.test_error_handling()
        
        # Print summary
        print("\n" + "=" * 60)
        print("🏁 TEST SUMMARY")
        print("=" * 60)
        print(f"Total Tests: {self.total_tests}")
        print(f"✅ Passed: {self.passed_tests}")
        print(f"❌ Failed: {self.failed_tests}")
        print(f"Success Rate: {(self.passed_tests/self.total_tests*100):.1f}%")
        
        if self.failed_tests > 0:
            print("\n❌ FAILED TESTS:")
            for result in self.test_results:
                if not result['passed']:
                    print(f"  - {result['test']}: {result['message']}")
        
        return self.failed_tests == 0

if __name__ == "__main__":
    tester = BackendTester()
    success = tester.run_all_tests()
    
    # Exit with appropriate code
    sys.exit(0 if success else 1)