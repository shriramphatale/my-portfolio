import React, { useState } from 'react';
import { FileText, Send, Sparkles, Search, RefreshCw } from 'lucide-react';

interface SampleQuery {
  question: string;
  retrievedChunks: { page: number; section: string; score: number; snippet: string }[];
  answer: string;
}

const SAMPLE_QUERIES: Record<string, SampleQuery> = {
  rag: {
    question: 'How does the RAG vector search and chunking pipeline work in AskDoc.ai?',
    retrievedChunks: [
      {
        page: 4,
        section: '§2.3 Ingestion Pipeline',
        score: 0.942,
        snippet:
          'Documents are chunked using recursive character splitting (chunk_size=800, overlap=120 tokens). Vector embeddings are generated via OpenAI text-embedding-3-small and stored in an indexed vector namespace with metadata containing page numbers and character offsets.',
      },
      {
        page: 6,
        section: '§3.1 Hybrid Retrieval',
        score: 0.887,
        snippet:
          'Queries execute hybrid retrieval combining dense vector similarity with sparse BM25 keyword matching, reranked by reciprocal rank fusion (RRF) before context injection into the prompt template.',
      },
    ],
    answer:
      'AskDoc.ai processes uploaded PDFs by splitting text into overlapping 800-token chunks with 120-token sliding windows. The chunks are embedded into 1536-dimensional vectors and stored alongside page metadata. When a user queries, a hybrid search (vector similarity + BM25) retrieves top matches and passes verified citations to the generative model for hallucination-free answers.',
  },
  bullmq: {
    question: 'How are asynchronous PDF parsing jobs handled with Redis and BullMQ?',
    retrievedChunks: [
      {
        page: 8,
        section: '§4.2 Async Queue Architecture',
        score: 0.931,
        snippet:
          'File uploads are offloaded immediately to a BullMQ worker queue backed by Redis in-memory storage. The main API returns a job ID to the client for polling or WebSocket progress streaming.',
      },
      {
        page: 11,
        section: '§5.0 Resilience & Rate Limiting',
        score: 0.895,
        snippet:
          'Workers run isolated sandbox processes with concurrency throttles, memory caps per job (256MB), and exponential backoff retry policies (attempts=3, backoff=5000ms).',
      },
    ],
    answer:
      'Large PDF parsing is decoupled from the Express request lifecycle. Uploaded files trigger an async BullMQ job in Redis. Worker threads extract text, generate embeddings, and notify clients in real-time without blocking HTTP server responsiveness or risking memory spikes.',
  },
  citations: {
    question: 'How does AskDoc.ai guarantee zero hallucinations and accurate citations?',
    retrievedChunks: [
      {
        page: 3,
        section: '§1.4 Fact-Grounding Constraint',
        score: 0.963,
        snippet:
          'The system prompt enforces strict citation injection: responses must cite [Page X, §Y] for every assertion. If the retrieved context contains insufficient evidence, the model explicitly acknowledges the absence of information.',
      },
    ],
    answer:
      'The architecture pairs strict system prompt engineering with context boundary limits. The model is constrained to answer solely from retrieved semantic chunks and must format assertions with inline page citations ([Page 3, §1.4]), preventing speculative hallucination.',
  },
};

export const AskDocLiveDemo: React.FC = () => {
  const [selectedKey, setSelectedKey] = useState<string>('rag');
  const [isQuerying, setIsQuerying] = useState<boolean>(false);
  const [activeQuery, setActiveQuery] = useState<SampleQuery>(SAMPLE_QUERIES.rag);
  const [customQuestion, setCustomQuestion] = useState<string>('');

  const handleSelectQuery = (key: string) => {
    setSelectedKey(key);
    setIsQuerying(true);
    setTimeout(() => {
      setActiveQuery(SAMPLE_QUERIES[key]);
      setIsQuerying(false);
    }, 400);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customQuestion.trim()) return;
    setIsQuerying(true);
    setTimeout(() => {
      setActiveQuery({
        question: customQuestion,
        retrievedChunks: [
          {
            page: 2,
            section: '§1.1 Custom Search Match',
            score: 0.915,
            snippet: `Semantic match retrieved for query: "${customQuestion}". Relevant document context extracted with cosine similarity > 0.90.`,
          },
        ],
        answer: `Based on the uploaded documentation regarding "${customQuestion}", the system retrieved relevant sections from Page 2 with confirmed page-level grounding and zero hallucination.`,
      });
      setIsQuerying(false);
      setCustomQuestion('');
    }, 500);
  };

  return (
    <div className="mt-6 rounded-lg border border-[#27272a] bg-[#0c0c0e] overflow-hidden">
      {/* Interactive Playground Header */}
      <div className="px-4 py-3 bg-[#121215] border-b border-[#242426] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-xs font-medium text-zinc-300">
            Interactive RAG Architecture Simulator
          </span>
        </div>
        <span className="font-mono text-[10px] text-zinc-400 border border-zinc-800 bg-zinc-900 px-2 py-0.5 rounded">
          Live Sandbox
        </span>
      </div>

      <div className="p-4 md:p-5 space-y-4">
        {/* Document Context Card */}
        <div className="p-3 rounded-md bg-[#16161a] border border-[#26262a] flex items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5 text-zinc-300">
            <FileText className="w-4 h-4 text-sky-400 shrink-0" />
            <div className="truncate">
              <span className="font-medium text-white">AskDoc_Engineering_Whitepaper_v2.pdf</span>
              <span className="text-zinc-500 ml-2 font-mono text-[11px]">(18 pages · 1536-dim embeddings)</span>
            </div>
          </div>
          <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-900/60 px-2 py-0.5 rounded shrink-0">
            Vectorized
          </span>
        </div>

        {/* Sample Query Selectors */}
        <div>
          <div className="text-[11px] font-mono text-zinc-400 mb-2">
            Select a sample query to inspect the RAG retrieval pipeline:
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleSelectQuery('rag')}
              className={`px-3 py-1.5 rounded text-xs font-mono transition-colors text-left ${
                selectedKey === 'rag'
                  ? 'bg-zinc-800 text-white border border-zinc-700'
                  : 'bg-[#141417] text-zinc-400 border border-zinc-800/80 hover:text-zinc-200 hover:border-zinc-700'
              }`}
            >
              RAG & Chunking
            </button>
            <button
              onClick={() => handleSelectQuery('bullmq')}
              className={`px-3 py-1.5 rounded text-xs font-mono transition-colors text-left ${
                selectedKey === 'bullmq'
                  ? 'bg-zinc-800 text-white border border-zinc-700'
                  : 'bg-[#141417] text-zinc-400 border border-zinc-800/80 hover:text-zinc-200 hover:border-zinc-700'
              }`}
            >
              BullMQ & Redis Queue
            </button>
            <button
              onClick={() => handleSelectQuery('citations')}
              className={`px-3 py-1.5 rounded text-xs font-mono transition-colors text-left ${
                selectedKey === 'citations'
                  ? 'bg-zinc-800 text-white border border-zinc-700'
                  : 'bg-[#141417] text-zinc-400 border border-zinc-800/80 hover:text-zinc-200 hover:border-zinc-700'
              }`}
            >
              Zero-Hallucination Citations
            </button>
          </div>
        </div>

        {/* Pipeline Visualizer Box */}
        <div className="space-y-3 pt-1">
          {/* Active Question */}
          <div className="p-3 rounded bg-[#111114] border border-[#222226] text-xs">
            <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider mb-1">
              Natural Language Ingestion
            </div>
            <div className="text-zinc-200 font-medium flex items-start gap-2">
              <span className="text-zinc-500">Q:</span>
              <span>{activeQuery.question}</span>
            </div>
          </div>

          {/* Retrieved Chunks with Similarity Scores */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
              <span className="flex items-center gap-1.5">
                <Search className="w-3 h-3 text-sky-400" />
                Retrieved Vector Chunks (Cosine Similarity)
              </span>
              <span className="text-[10px] text-zinc-400">Top-k: 2</span>
            </div>

            {isQuerying ? (
              <div className="p-6 rounded bg-[#111114] border border-zinc-800 text-center flex items-center justify-center gap-2 text-xs text-zinc-400 font-mono">
                <RefreshCw className="w-3.5 h-3.5 animate-spin text-sky-400" />
                Searching embedding vector space...
              </div>
            ) : (
              <div className="space-y-2">
                {activeQuery.retrievedChunks.map((chunk, i) => (
                  <div
                    key={i}
                    className="p-3 rounded bg-[#141418] border border-zinc-800/80 text-xs space-y-1.5"
                  >
                    <div className="flex items-center justify-between font-mono text-[11px]">
                      <span className="text-sky-300 font-medium">
                        Page {chunk.page} · {chunk.section}
                      </span>
                      <span className="text-emerald-400 bg-emerald-950/40 border border-emerald-900/50 px-1.5 py-0.5 rounded text-[10px]">
                        sim: {chunk.score.toFixed(3)}
                      </span>
                    </div>
                    <p className="text-zinc-400 font-mono text-[11px] leading-relaxed">
                      "{chunk.snippet}"
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Generated AI Answer with Grounding */}
          <div className="p-3.5 rounded bg-[#12161f] border border-sky-950/60 text-xs space-y-2">
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-sky-300">
              <Sparkles className="w-3 h-3" />
              <span>Grounded Model Synthesis</span>
            </div>
            <p className="text-zinc-200 text-xs leading-relaxed">
              {activeQuery.answer}
            </p>
          </div>
        </div>

        {/* Custom Question Input */}
        <form onSubmit={handleCustomSubmit} className="pt-1 flex gap-2">
          <input
            type="text"
            value={customQuestion}
            onChange={(e) => setCustomQuestion(e.target.value)}
            placeholder="Test a custom question against AskDoc.ai..."
            className="flex-1 px-3 py-1.5 text-xs rounded border border-[#27272a] bg-[#121215] text-white placeholder-zinc-500 focus:outline-none focus:border-sky-500 font-mono"
          />
          <button
            type="submit"
            disabled={!customQuestion.trim() || isQuerying}
            className="px-3 py-1.5 rounded bg-zinc-800 hover:bg-zinc-700 disabled:opacity-40 text-xs text-white font-mono flex items-center gap-1 transition-colors"
          >
            <Send className="w-3 h-3" />
            <span className="hidden sm:inline">Ask</span>
          </button>
        </form>
      </div>
    </div>
  );
};
