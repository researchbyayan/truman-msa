"use client";

import { useEffect } from "react";

/**
 * Renders official Instagram embeds. Loads embed.js once, then processes the
 * blockquotes so the real post images/captions render from Instagram directly.
 */
declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

const EMBED_SRC = "https://www.instagram.com/embed.js";

function useInstagramEmbeds(deps: unknown[]) {
  useEffect(() => {
    const process = () => window.instgrm?.Embeds?.process();

    if (window.instgrm) {
      process();
      return;
    }

    let script = document.querySelector<HTMLScriptElement>(
      `script[src="${EMBED_SRC}"]`
    );
    if (!script) {
      script = document.createElement("script");
      script.src = EMBED_SRC;
      script.async = true;
      script.onload = process;
      document.body.appendChild(script);
    } else {
      script.addEventListener("load", process);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

export function InstagramEmbed({ url }: { url: string }) {
  useInstagramEmbeds([url]);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={url}
      data-instgrm-version="14"
      style={{
        background: "#fff",
        border: 0,
        borderRadius: 16,
        boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
        margin: 0,
        maxWidth: "100%",
        minWidth: 0,
        width: "100%",
      }}
    >
      <a href={url} target="_blank" rel="noopener noreferrer">
        View this post on Instagram
      </a>
    </blockquote>
  );
}

export function InstagramGrid({ urls }: { urls: string[] }) {
  useInstagramEmbeds([urls.join(",")]);

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {urls.map((url) => (
        <blockquote
          key={url}
          className="instagram-media"
          data-instgrm-permalink={url}
          data-instgrm-version="14"
          style={{
            background: "#fff",
            border: 0,
            borderRadius: 16,
            boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
            margin: 0,
            maxWidth: "100%",
            minWidth: 0,
            width: "100%",
          }}
        >
          <a href={url} target="_blank" rel="noopener noreferrer">
            View this post on Instagram
          </a>
        </blockquote>
      ))}
    </div>
  );
}
