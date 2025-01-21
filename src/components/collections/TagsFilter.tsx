import React from 'react';

const tags = [
  'Soy Wax',
  'Natural',
  'Handcrafted',
  'Long-lasting',
  'Essential Oils',
  'Eco-friendly',
  'Vegan',
  'Gift-worthy'
];

interface TagsFilterProps {
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
}

export default function TagsFilter({ selectedTags, onTagToggle }: TagsFilterProps) {
  return (
    <div className="mb-8">
      <h3 className="font-medium mb-4">Tags</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => onTagToggle(tag)}
            className={`px-3 py-1 rounded-full text-sm transition-colors ${
              selectedTags.includes(tag)
                ? 'bg-neutral-900 text-white'
                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}