import { Contact } from "~/models/contact";

const API_URL = import.meta.env.PUBLIC_API_URL;

export class ContactService {
  static async createItem(item: Contact): Promise<Contact> {
    if (!API_URL) {
      throw new Error("PUBLIC_API_URL is not defined");
    }

    const response = await fetch(`${API_URL}/contact/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });

    if (!response.ok) {
      let detail = "";
      try {
        const data = await response.json();
        detail = data?.message ?? "";
      } catch {
        // body non-JSON
      }
      throw new Error(
        detail || `Failed to create contact (${response.status})`,
      );
    }

    return await response.json();
  }
}
