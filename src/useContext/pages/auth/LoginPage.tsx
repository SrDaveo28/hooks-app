import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserContext } from "@/useContext/context/UserContext";
import { toast } from "sonner";

export const LoginPage = () => {
  const { login } = useContext(UserContext);
  const [userId, setUserId] = useState("");
  const navigation = useNavigate();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = login(+userId);
    console.log("🚀 ~ handleSubmit ~ result:", result);
    if (!result) {
      toast.error("Usuario no encontrado");
      return;
    }

    navigation("/profile");
  };
  return (
    <div className="flex flex-col items-center min-h-screen">
      <h1 className="text-4xl font-bold">Iniciar sesión</h1>
      <hr />
      <form
        className="flex flex-col gap-2 my-10"
        onSubmit={(event) => handleSubmit(event)}
      >
        <Input
          type="number"
          placeholder="Id del Usuario"
          value={userId}
          onChange={(event) => setUserId(event.target.value)}
        />

        <Button type="submit" variant="secondary">
          Login
        </Button>
      </form>

      <Link to="/about">
        <Button variant="ghost"> Volver a la página principal</Button>
      </Link>
    </div>
  );
};
