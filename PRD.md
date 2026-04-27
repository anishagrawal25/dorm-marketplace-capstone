1. Scope Cut

These are features you are intentionally NOT building:

Payments
Payments are excluded because Dorm Marketplace focuses on in-person exchanges, and handling transactions would add unnecessary backend complexity.
Live Chat Between Users
Real-time communication is not required for the MVP since users can coordinate offline, and implementing chat would significantly increase system complexity.
Advanced Search and Filters
Filtering and search are not essential for a small-scale campus marketplace and can be deferred until the item volume grows.
 2. MVP Features

These are the only 3 features that make the product usable:

List an Item
Students can create a listing by adding an item title, making it visible in the marketplace.
View Available Items
Students can browse all listed items along with their current status (Available, Claimed, Sold).
Claim an Item
A student can claim an available item, temporarily reserving it for pickup.

3. Acceptance Criteria — Claim Item Flow

These define how your system must behave (very important):

 Case 1 — Successful Claim
Given an item is currently available
When a user clicks on "Claim Item"
Then the item status is updated to "Claimed" and it is no longer available for other users
 Case 2 — Prevent Double Claim
Given an item has already been claimed by another user
When a second user attempts to claim the same item
Then the system rejects the action and displays "Item not available"
 Case 3 — Claim Expiration
Given an item has been claimed but not picked up
When the claim duration expires
Then the item status automatically resets to "Available" and can be claimed again