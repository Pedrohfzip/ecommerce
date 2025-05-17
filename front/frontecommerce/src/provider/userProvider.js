import api from "../services/api";

export const fetchUsers = async () => {
  try {
    const response = await api.get("/users");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    throw error;
  }
};
