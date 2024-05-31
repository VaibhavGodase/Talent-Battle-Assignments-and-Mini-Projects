// src/EmojiSearch.js
import React, { useState } from 'react';

// Sample list of emojis
const emojiList = [
    { symbol: "😀", name: "grinning face" },
    { symbol: "😂", name: "face with tears of joy" },
    { symbol: "😍", name: "smiling face with heart-eyes" },
    { symbol: "😎", name: "smiling face with sunglasses" },
    { symbol: "🥺", name: "pleading face" },
    { symbol: "🤔", name: "thinking face" },
    { symbol: "👍", name: "thumbs up" },
    { symbol: "👏", name: "clapping hands" },
    { symbol: "🔥", name: "fire" },
    { symbol: "❤️", name: "red heart" },
];

function EmojiSearch() {
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        setQuery(e.target.value);
    };

    const filteredEmojis = emojiList.filter(emoji =>
        emoji.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="emoji-search">
            <input
                type="text"
                placeholder="Search for an emoji..."
                value={query}
                onChange={handleSearch}
            />
            <div className="emoji-list">
                {filteredEmojis.map((emoji, index) => (
                    <div key={index} className="emoji-item">
                        <span>{emoji.symbol}</span> <span>{emoji.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EmojiSearch;
