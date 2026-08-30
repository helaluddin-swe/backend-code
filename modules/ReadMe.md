##crypto module 
use case:
Password storage
Data integrity verification
Digital signatures
Content addressing 

## createHash() creates a hash object with the specified algorithm--sha-256
update() updates the hash content with the given data
digest() calculates the digest and outputs it in the specified format

When handling passwords, it's crucial to use specialized password hashing functions that are designed to be computationally expensive to prevent brute-force attacks.

Here's why simple hashes are insufficient:

Never store passwords in plain text or with simple hashes like MD5 or SHA-1.

These can be easily cracked using rainbow tables or brute-force attacks.

## Key Concepts for Password Security
Salting: Add a unique random value to each password before hashing
Key Stretching: Make the hashing process intentionally slow to prevent brute-force attacks
Work Factor: Control how computationally intensive the hashing process is

## What is a salt?
A salt is a random string that is unique to each user.
It's combined with the password before hashing to ensure that even if two users have the same password, their hashes will be different.
This prevents attackers from using precomputed tables (like rainbow tables) to crack multiple passwords at once.
For password hashing in a production environment, consider using a dedicated library like bcrypt or argon2 that is specifically designed for secure password handling.


<!-- hmac -->
## HMAC (Hash-based Message Authentication Code)
HMAC is a specific type of message authentication code (MAC) involving a cryptographic hash function and a secret cryptographic key.

It provides both data integrity and authentication.

When to Use HMAC
API request verification
Secure cookies and sessions
Data integrity checks
Webhook verification
HMAC Security Properties
Message Integrity: Any change to the message will produce a different HMAC
Authenticity: Only parties with the secret key can generate valid HMACs
No Encryption: HMAC doesn't encrypt the message, only verifies its integrity


## Symmetric Encryption
Symmetric encryption uses the same key for both encryption and decryption.

It's generally faster than asymmetric encryption and is ideal for:

Bulk data encryption
Database encryption
Filesystem encryption
Secure messaging (combined with key exchange)

## Common Symmetric Algorithms
Algorithm-- Size-----Block	Notes
AES-256	--256 bits--	128 bits--	Current standard, widely used
ChaCha20	256 bits	512 bits	Faster in software, used in TLS 1.3
3DES	168 bits	64 bits	Legacy, not recommended for new systems
Blowfish	32-448 bits	64 bits	Legacy, use Twofish or AES instead