import mongoose from "mongoose";

import { ContactSchema } from "../models/crmModels";
// To check in postman we need to go to the body and then select x-www-form-urlencoded

// Now Contact will have access to the ContactSchema
const Contact = mongoose.model("Contact", ContactSchema);

// Adding a new contact
export const addNewContact = (req, res) => {
  // first of all here i am requesting the body
  let newContact = new Contact(req.body);
  // Saving and responding in json
  newContact.save((err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};

// Get Request
export const getContact = (req, res) => {
  // This will find everything in the database
  Contact.find({}, (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};

// Particular Get Point
export const getContactWithID = (req, res) => {
  // This will find everything in the database
  Contact.findById(req.params.contactID, (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};

// PUT ENDPOINT
export const updateContact = (req, res) => {
  // This will find everything in the database
  Contact.findOneAndUpdate(
    { _id: req.params.contactID },
    req.body,
    { new: true, useFindAndModify: false },
    (err, contact) => {
      if (err) {
        res.send(err);
      }
      res.json(contact);
    }
  );
};

// DELETE ENDPOINT
export const deleteContact = (req, res) => {
  // This will find everything in the database
  Contact.remove(
    { _id: req.params.contactID },

    (err, contact) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "Contact deleted successfully" });
    }
  );
};
