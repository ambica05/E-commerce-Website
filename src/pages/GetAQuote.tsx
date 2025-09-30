// src/pages/GetAQuote.tsx

import React, { useState } from "react";
import { menuData, menuLimits, commonItems, extrasOptions, liveCounters } from "../data/menuData";

interface QuoteFormProps {
  menuType: keyof typeof menuLimits;
}

const convertSectionToKey = (section: string): keyof typeof menuData => {
  return section
    .replace(/[^a-zA-Z0-9]/g, " ")
    .split(" ")
    .map((word, i) =>
      i === 0
        ? word.toLowerCase()
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join("") as keyof typeof menuData;
};

const GetAQuote: React.FC = () => {
  const [menuType, setMenuType] = useState<keyof typeof menuLimits>("vegBasic");
  
  const limits = menuLimits[menuType];
  const [selectedItems, setSelectedItems] = useState<Record<string, string[]>>({});
  const allSelectedItems = Object.values(selectedItems).flat();
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [selectedLiveCounters, setSelectedLiveCounters] = useState<string[]>([]);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [people, setPeople] = useState("");
  const [message, setMessage] = useState("");


  const handleCheckboxChange = (section: string, item: string) => {
  setSelectedItems(prev => {
    const sectionSelected = prev[section] || [];
    if (sectionSelected.includes(item)) {
      // remove item
      return {
        ...prev,
        [section]: sectionSelected.filter(i => i !== item),
      };
    } else {
      // add item if limit not reached
      if (sectionSelected.length < limits[section]) {
        return {
          ...prev,
          [section]: [...sectionSelected, item],
        };
      }
      return prev; // ignore if limit reached
    }
  });
};


      const handleSubmit = () => {
      const selected = Object.entries(selectedItems)
      const extras = selectedExtras.length ? `\nExtras: ${selectedExtras.join(", ")}` : "";
      const liveCountersMessage = selectedLiveCounters.length
        ? `\nLive Counters: ${selectedLiveCounters.join("\n ")}`
        : "";
      const common = commonItems[menuType]?.join(", ");

      const fullMessage = `
      📝 *Get A Quote Request*

      *Name:* ${name}
      *Phone:* ${phone}
      *Address:* ${address}
      *No. of People:* ${people}
      *Menu Type:* ${menuType}

      *Selected Items:*
        ${Object.entries(selectedItems)
          .map(([section, items]) => `• ${section}: ${items.join(", ")}`)
          .join("\n")}

      *Common Items:*
        ${commonItems[menuType]?.map((item) => `• ${item}`).join("\n")}

      *Extras:*
        ${selectedExtras.length ? selectedExtras.join(", ") : "None"}

      *Live Counters:*
        ${selectedLiveCounters.length ? selectedLiveCounters.join("\n ") : "None"}

      *Additional Message:*
        ${message || "N/A"}
        `;

      const encoded = encodeURIComponent(fullMessage);
      const whatsappURL = `https://wa.me/919246292884?text=${encoded}`;
      window.open(whatsappURL, "_blank");
    };



  // Prepare menu sections based on limits
  const menu: Record<string, string[]> = {};
  Object.entries(limits).forEach(([section, _]) => {
    const key = convertSectionToKey(section);
    if (menuData[key]) {
      menu[section] = menuData[key];
    }
  });

  return (
    <div className="min-h-screen py-10 px-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Get a Quote - {menuType}</h1>
      <select
        className="mb-6 border p-2 rounded"
        value={menuType}
        onChange={(e) => setMenuType(e.target.value as keyof typeof menuLimits)}
      >
        {Object.keys(menuLimits).map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
    </select>


      {Object.entries(menu).map(([section, items]) => {
  const limit = limits[section];
  return (
    <div key={section} className="mb-6">
      <h2 className="text-xl font-semibold mb-2">
        {section} (Choose up to {limit})
      </h2>
      <div className="grid grid-cols-2 gap-2">
        {items.map(item => (
          <label key={item} className="flex items-center">
            <input
              type="checkbox"
              checked={selectedItems[section]?.includes(item) || false}
              onChange={() => handleCheckboxChange(section, item)}
              disabled={
                !selectedItems[section]?.includes(item) &&
                (selectedItems[section]?.length || 0) >= limit
              }
              className="mr-2"
            />
            {item}
          </label>
        ))}
      </div>
    </div>
  );
})}
<div className="mb-8">
  <h2 className="text-xl font-semibold mb-2">Additional Extras (Optional)</h2>
  <div className="grid grid-cols-2 gap-2">
    {extrasOptions.map((extra) => (
      <label key={extra} className="flex items-center">
        <input
          type="checkbox"
          checked={selectedExtras.includes(extra)}
          onChange={() => {
            setSelectedExtras((prev) =>
              prev.includes(extra)
                ? prev.filter((e) => e !== extra)
                : [...prev, extra]
            );
          }}
          className="mr-2"
        />
        {extra}
      </label>
    ))}
  </div>
</div>

{selectedExtras.includes("Any Live Counters") && (
  <div className="mb-8">
    <h2 className="text-xl font-semibold mb-2">Live Counters (Select any)</h2>
    <div className="grid grid-cols-2 gap-2">
      {liveCounters.map((item) => (
        <label key={item} className="flex items-center">
          <input
            type="checkbox"
            checked={selectedLiveCounters.includes(item)}
            onChange={() => {
              setSelectedLiveCounters((prev) =>
                prev.includes(item)
                  ? prev.filter((i) => i !== item)
                  : [...prev, item]
              );
            }}
            className="mr-2"
          />
          {item}
        </label>
      ))}
    </div>
  </div>
)}


      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Common Items</h2>
        <ul className="list-disc pl-5 text-gray-700">
          {commonItems[menuType]?.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

          <div className="mt-10 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded p-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border rounded p-2"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="text"
            placeholder="Address"
            className="w-full border rounded p-2"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            type="number"
            placeholder="Number of People"
            className="w-full border rounded p-2"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
          />
          <textarea
            placeholder="Any additional message"
            className="w-full border rounded p-2"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button
            onClick={handleSubmit}
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
          >
            Send to WhatsApp
          </button>
        </div>


      </div>
    </div>
  );
};

export default GetAQuote;
