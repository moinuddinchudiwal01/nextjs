"use client";

import Chips, { Chip } from "@/components/common/Chips";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";

export default function Home() {
  const [chipsCollection, setChipsCollection] = useState<Chip[]>([]);
  const [inputVal, setInputVal] = useState<string>("");
  const [editId, setEditId] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(event.target.value);
  };

  const handleAddChips = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const trimmedValue = inputVal.trim();
      if (trimmedValue.length === 0) return;

      if (editId) {
        setChipsCollection((prev) =>
          prev.map((chip) =>
            chip.id === editId ? { ...chip, label: trimmedValue } : chip
          )
        );
        setEditId("");
      } else {
        setChipsCollection((prev) => [
          ...prev,
          { id: Date.now().toString(), label: trimmedValue },
        ]);
      }

      setInputVal("");
    }
  };

  const handleRemoveChips = (chip: Chip) => {
    setChipsCollection(chipsCollection.filter((item) => item.id !== chip.id));

    if (editId === chip.id) {
      setEditId("");
      setInputVal("");
    }
  };

  const handleEditChips = (chip: Chip) => {
    setEditId(chip.id);
    setInputVal(chip.label);
  };

  return (
    <div className='flex items-center flex-col'>
      <h3 className='mb-2'>
        <Label>Enter skills</Label>
        <Input
          type='text'
          value={inputVal}
          onChange={handleChange}
          onKeyDown={handleAddChips}
        />
      </h3>
      <Chips
        chips={chipsCollection}
        onRemove={(chip) => handleRemoveChips(chip)}
        onEdit={(chip) => handleEditChips(chip)}
      />
    </div>
  );
}
