"use client";

import React from "react";
import { X } from "lucide-react";

export type Chip = {
  id: string;
  label: string;
};

export type ChipsProps = {
  chips: Chip[];
  onRemove?: (removed: Chip) => void;
  onEdit?: (edited: Chip) => void;
  removable?: boolean;
  className?: string;
};

const Chips: React.FC<ChipsProps> = ({
  chips,
  onRemove,
  onEdit,
  removable = true,
  className = "",
}) => {
  if (!chips || chips.length === 0) return null;

  return (
    <div
      className={`flex flex-wrap gap-2 items-center ${className}`}
      role='list'
      aria-label='Chips list'
    >
      {chips.map((chip) => (
        <div
          key={chip.id}
          role='listitem'
          className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/70 text-sm text-foreground/90 border border-border'
        >
          <span
            className='select-none cursor-pointer'
            onClick={() => onEdit?.(chip)}
          >
            {chip.label}
          </span>

          {removable && onRemove && (
            <button
              type='button'
              aria-label={`Remove ${chip.label}`}
              onClick={() => onRemove?.(chip)}
              className='ml-1 -mr-1 p-1 rounded-full hover:bg-muted/40 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1'
            >
              <X className='w-4 h-4' />
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Chips;
