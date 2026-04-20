import React, { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import app from "./firebase";
import emailjs from "@emailjs/browser";

const db = getFirestore(app);

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form Data 👉", formData);

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields ⚠️");
      return;
    }

    try {
      setLoading(true);

      // 🔥 1. Firestore me save
      const docRef = await addDoc(collection(db, "contacts"), {
        ...formData,
        createdAt: new Date()
      });

      console.log("Saved ID 👉", docRef.id);

      // 🔥 2. Email send (EmailJS)
      await emailjs.send(
        "service_dt9lr0v",   // 👈 replace
        "template_w6cdyfo",  // 👈 replace
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "uL6U4byl8-3wDSXYv"    // 👈 replace
      );

      console.log("Email Sent ✅");

      alert("Message Sent Successfully ✅");

      // reset form
      setFormData({
        name: "",
        email: "",
        message: ""
      });

    } catch (error) {
      console.log("ERROR 👉", error);
      alert("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-black text-white px-6 py-10 flex items-center justify-center">

      <div className="w-full max-w-4xl bg-gray-900 p-8 rounded-lg shadow-lg">

        <h1 className="text-4xl font-bold text-center mb-6">
          Contact <span className="text-blue-500">Me</span>
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full p-3 rounded bg-gray-800 text-white"
          />

          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full p-3 rounded bg-gray-800 text-white"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            className="w-full p-3 rounded bg-gray-800 text-white"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 p-3 rounded font-semibold"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>

      </div>

    </section>
  );
};

export default Contact;