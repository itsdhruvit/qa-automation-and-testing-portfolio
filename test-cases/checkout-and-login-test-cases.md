# Manual Test Cases — Authentication & Checkout Flow

| Test ID | Module | Test Scenario | Preconditions | Test Steps | Expected Result | Type | Priority |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **TC-001** | Login | Valid user login | Active user account exists | 1. Navigate to login page<br>2. Enter valid email & password<br>3. Click **Sign In** | User is authenticated and redirected to dashboard; session token is created. | Functional | High |
| **TC-002** | Login | Invalid password error handling | Active user account exists | 1. Navigate to login page<br>2. Enter valid email & wrong password<br>3. Click **Sign In** | Login is blocked; clear validation message displays without exposing sensitive details. | Negative | High |
| **TC-003** | Cart | Add item and verify total calculation | User is on product catalogue | 1. Select item (£25.00)<br>2. Set quantity to `2`<br>3. Click **Add to Basket** | Basket badge updates to `2`; subtotal displays `£50.00` accurately. | Functional | High |
| **TC-004** | Checkout | Empty mandatory postcode validation | Item is in basket | 1. Proceed to checkout<br>2. Leave UK postcode blank<br>3. Click **Continue** | Form submission is prevented; inline required-field error highlights postcode input. | Boundary / Negative | Medium |
| **TC-005** | Session | Post-logout back-button access check | User was logged in and clicked Logout | 1. Click **Logout**<br>2. Click browser **Back** button | Protected dashboard page does not reload cached private data; user remains on login screen. | Security / Regression | High |
