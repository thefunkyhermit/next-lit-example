import type { TestRunnerConfig } from '@storybook/test-runner';

const config: TestRunnerConfig = {
  async preVisit(page) {
    // Wait for the page to be ready
    await page.waitForLoadState('networkidle');
  },
  async postVisit(page) {
    // Wait for any animations to complete
    await page.waitForTimeout(100);
  },
};

export default config; 