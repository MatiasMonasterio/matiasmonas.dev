export const sendContactForm = async (formData) => {
  const resp = await fetch("/api/contact", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (resp.status !== 200) {
    throw new Error("Error to send contact email");
  }
};
