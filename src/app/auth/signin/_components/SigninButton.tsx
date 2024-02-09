"use client";

import { signIn } from "next-auth/react";
import { Button } from "~/components/ui/button";
import { useState } from "react";

type State = "error" | "idle" | "pending" | "success";

export function SigninButton({ redirectTo }: { redirectTo: string }) {
  const [state, setState] = useState<State>("idle");

  const handleSignIn = async () => {
    try {
      setState("pending");
      await signIn("steam", { callbackUrl: redirectTo });
    } catch (error) {
      setState("error");
    }
  };

  return (
    <div className="mx-auto rounded-md duration-300">
      <Button
        variant="outline"
        onClick={handleSignIn}
        disabled={state === "pending"}
        className="fancy-border-gradient relative mx-auto flex gap-4 border-none text-black dark:text-white"
      >
        Login with Steam
      </Button>
    </div>
  );
}
