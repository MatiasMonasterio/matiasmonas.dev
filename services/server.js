import prisma from "prisma/prisma";

export const sendContactForm = async (formData) => {
  try {
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

    return {};
  } catch (error) {
    console.error(error);
    return { error };
  }
};

export const getProfile = async () => {
  return await prisma.profile.findFirst();
};

export const getExperiencies = async () => {
  return await prisma.experience.findMany();
};

export const getMainProjects = async () => {
  const projects = await prisma.project.findMany({
    where: { pin: true },
  });

  return projects.map(({ pin, ...properties }) => {
    return { ...properties };
  });
};
