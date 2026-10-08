'use client';

import { useState, useMemo } from 'react';
import { AITool, Category, Platform } from '@/types';
import ToolCard from './ToolCard';

interface ToolDirectoryProps {
  initialTools: AITool[];
  categories: Category[];
}

export default function ToolDirectory({ initialTools, categories }: ToolDirectoryProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPricing, setSelectedPricing] = useState<string>('all');
  const [selectedPlatform, setSelectedPlatform] = useState<string>('all');

  const filteredTools = useMemo(() => {
    return initialTools.filter((tool) => {
      // Search matching name, tagline, description, features
      const matchesSearch =
        searchQuery === '' ||
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      // Category matching
      const matchesCategory =
        selectedCategory === 'all' || tool.category === selectedCategory;

      // Pricing matching
      const matchesPricing =
        selectedPricing === 'all' || tool.pricingModel === selectedPricing;

      // Platform matching
      const matchesPlatform =
        selectedPlatform === 'all' || tool.platforms.includes(selectedPlatform as Platform);

      return matchesSearch && matchesCategory && matchesPricing && matchesPlatform;
    });
  }, [initialTools, searchQuery, selectedCategory, selectedPricing, selectedPlatform]);

  return (
    <div>
      {/* Search & Filter Toolbar */}
      <div
        className="glass-card"
        style={{
          marginBottom: 'var(--space-8)',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-4)',
        }}
      >
        {/* Search Input */}
        <div>
          <label
            htmlFor="tool-search"
            style={{
              display: 'block',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: 'var(--text-secondary)',
              marginBottom: 'var(--space-2)',
            }}
          >
            Search by tool name, purpose, or tag:
          </label>
          <div style={{ position: 'relative' }}>
            <input
              id="tool-search"
              type="text"
              placeholder="e.g. NotebookLM, citations, coding, presentations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                backgroundColor: 'var(--bg-surface-elevated)',
                border: '1px solid var(--border-medium)',
                borderRadius: 'var(--radius-md)',
                color: 'var(--text-primary)',
                fontSize: '0.95rem',
              }}
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--text-muted)',
                  fontSize: '0.85rem',
                }}
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Filter Bar: Category, Pricing, Platform */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: 'var(--space-4)',
          }}
        >
          {/* Category Filter */}
          <div>
            <label
              htmlFor="filter-category"
              style={{
                display: 'block',
                fontSize: '0.8rem',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                marginBottom: '4px',
              }}
            >
              Category:
            </label>
            <select
              id="filter-category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              style={{
                width: '100%',
                padding: '0.6rem',
                backgroundColor: 'var(--bg-surface-elevated)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                color: 'var(--text-primary)',
                fontSize: '0.85rem',
              }}
            >
              <option value="all">All Categories ({initialTools.length})</option>
              {categories.map((cat) => (
                <option key={cat.slug} value={cat.slug}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* Pricing Model Filter */}
          <div>
            <label
              htmlFor="filter-pricing"
              style={{
                display: 'block',
                fontSize: '0.8rem',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                marginBottom: '4px',
              }}
            >
              Pricing Model:
            </label>
            <select
              id="filter-pricing"
              value={selectedPricing}
              onChange={(e) => setSelectedPricing(e.target.value)}
              style={{
                width: '100%',
                padding: '0.6rem',
                backgroundColor: 'var(--bg-surface-elevated)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                color: 'var(--text-primary)',
                fontSize: '0.85rem',
              }}
            >
              <option value="all">All Models</option>
              <option value="Free">100% Free</option>
              <option value="Freemium">Freemium (Free Tier Available)</option>
            </select>
          </div>

          {/* Platform Filter */}
          <div>
            <label
              htmlFor="filter-platform"
              style={{
                display: 'block',
                fontSize: '0.8rem',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                marginBottom: '4px',
              }}
            >
              Platform:
            </label>
            <select
              id="filter-platform"
              value={selectedPlatform}
              onChange={(e) => setSelectedPlatform(e.target.value)}
              style={{
                width: '100%',
                padding: '0.6rem',
                backgroundColor: 'var(--bg-surface-elevated)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                color: 'var(--text-primary)',
                fontSize: '0.85rem',
              }}
            >
              <option value="all">All Platforms</option>
              <option value="Web">Web Browser</option>
              <option value="macOS">macOS</option>
              <option value="Windows">Windows</option>
              <option value="iOS">iOS</option>
              <option value="Android">Android</option>
            </select>
          </div>
        </div>

        {/* Results Counter and Active Filter Tags */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.85rem',
            color: 'var(--text-muted)',
            paddingTop: 'var(--space-2)',
            borderTop: '1px solid var(--border-subtle)',
          }}
        >
          <span>
            Showing <strong>{filteredTools.length}</strong> of {initialTools.length} verified tools
          </span>
          {(searchQuery || selectedCategory !== 'all' || selectedPricing !== 'all' || selectedPlatform !== 'all') && (
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedPricing('all');
                setSelectedPlatform('all');
              }}
              style={{
                color: 'var(--brand-primary)',
                fontSize: '0.85rem',
                fontWeight: 600,
              }}
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* Tools Grid */}
      {filteredTools.length > 0 ? (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: 'var(--space-6)',
          }}
        >
          {filteredTools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      ) : (
        <div
          className="glass-card"
          style={{ textAlign: 'center', padding: 'var(--space-12)' }}
        >
          <h3 style={{ marginBottom: 'var(--space-2)' }}>No matching tools found</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: 'var(--space-4)' }}>
            Try clearing your search query or loosening your category filters.
          </p>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setSelectedPricing('all');
              setSelectedPlatform('all');
            }}
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
}
