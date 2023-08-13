import { useMutation, useQuery } from "@tanstack/react-query";
import { loginRequest, authRequest } from "../api/auth";
import { useSessionStore } from "../store/Session.Store";
import { useProfileStore } from "../store/profile.Store";

const useLoginQuery = () => {
  const { setSession } = useSessionStore((state) => state);
  const { setProfile } = useProfileStore((state) => state);

  return useMutation((credentials) => loginRequest(credentials), {
    onSuccess: (res) => {
      setSession(res ? res.data.detalle.token : null, res ? true : false);
      setProfile({
        id: res.data.detalle.id,
        username: res.data.detalle.username,
        email: res.data.detalle.email,
      });
    },
  });
};

const useAuthQuery = () => {
  const { setSession } = useSessionStore((state) => state);
  const { setProfile } = useProfileStore((state) => state);
  return useMutation(() => authRequest(), {
    onSuccess: (res) => {
      setProfile(res ? res.data.detalle : null);
    },
    onError: (err) => {
      console.log(err);
      setSession(null, false);
      setProfile(null);
    },
  });
};

export { useLoginQuery, useAuthQuery };
