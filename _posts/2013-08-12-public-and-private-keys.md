---
layout: post
title: "Public and Private Keys"
description: ""
category: 
tags: []
---
{% include JB/setup %}

A step by step descrition of how keys are securely passed.

1. Sender generates **session symmetric key**.
	* Symmetric meaning both parties will use the same key.
2. Sender encrypts **data** with **session key**.
3. Sender requests receivers **public key**.
4. Receiver sends **public key** while keeping the matching **private key** secret.
4. **Session key** is encrypted using receivers **pubic key**.
	* Now only the receivers **private key** can decrypt the **session key**.
5. Encrypted **Data** and encrypted **session key** are sent to receiver.
6. Receiver decrypts senders **session key** using receivers secret **private key**.
7. Receiver decrypts **data** using decrypted **session key**.

The locked box metaphor:

1. I lock a document in a box with a key.
2. I ask a friend to send me a box to which only they have a key too.
3. I place a copy of my document-box-key in my friends box and lock it.
4. I send the document box and my friends box (which contains the key to the document box) to my friend.
5. My friend opens their box with their secret key, and retrieves the document-box-key from inside.
6. My friend then uses that key to open the document box.