import { Contact } from "~/models/contact";

const API_URL = import.meta.env.PUBLIC_API_URL;

export class ContactService {
  static async createItem(item: Contact): Promise<Contact> {
    const response = await fetch(`${API_URL}/contact/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });

    if (!response.ok) {
      throw new Error("Failed to create contact");
    }

    return await response.json();
  }
}
