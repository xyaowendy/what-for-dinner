import { render, screen } from '@testing-library/react';
import { describe, it, beforeAll, afterAll, vi } from 'vitest';
import Page from '../app/page';

describe('Page', () => {
  beforeAll(() => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => [{ name: 'dinner' }],
    }) as unknown as typeof fetch;
  });

  afterAll(() => {
    vi.restoreAllMocks();
  });

  it('should test if home component is rendered', async () => {
    render(<Page />);
    expect(await screen.findByText('dinner')).toBeInTheDocument();
  });
});
