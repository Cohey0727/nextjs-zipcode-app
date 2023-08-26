"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useCallback, useState } from "react";

const InputForm = () => {
  const router = useRouter();
  const [zipCode, setZipCode] = useState("");

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      router.push(`/${zipCode}`);
    },
    [zipCode, router]
  );

  return (
    <div>
      <form onSubmit={handleSubmit} id="zipcode-form">
        <input
          type="text"
          name="zipcode"
          onChange={(e) => setZipCode(e.target.value)}
          value={zipCode}
        />
        <button type="submit" form="zipcode-form">
          検索
        </button>
      </form>
    </div>
  );
};

export default InputForm;
