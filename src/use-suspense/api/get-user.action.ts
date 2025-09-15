export interface User {
  id: number;
  name: string;
  location: string;
  role: string;
}

export const getUserAction = async (id: number) => {
  await new Promise((res) => setTimeout(res, 2000)); // Simula un retraso de 2 segundos

  return {
    id,
    name: "David",
    location: "Asunción, Paraguay",
    role: "Desarrollador web",
  };
};
