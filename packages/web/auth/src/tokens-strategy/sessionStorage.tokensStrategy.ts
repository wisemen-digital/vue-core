import type { OAuth2Tokens } from '../apiClient'
import type { TokensStrategy } from './tokensStrategy.type'

/**
 * Stores tokens in sessionStorage so they are cleared when the tab is closed.
 * Useful for more security-conscious applications that prefer not to persist
 * tokens across browser sessions.
 */
export class SessionStorageTokensStrategy implements TokensStrategy {
  private readonly CODE_VERIFIER_KEY = 'code_verifier'
  private readonly TOKENS_KEY = 'tokens'

  constructor(private readonly prefix?: string) {}

  private getStorageKey(key: string): string {
    if (this.prefix === undefined || this.prefix === '') {
      return key
    }

    return `${this.prefix}:${key}`
  }

  public getCodeVerifier(): string | null {
    return sessionStorage.getItem(this.getStorageKey(this.CODE_VERIFIER_KEY))
  }

  public getTokens(): OAuth2Tokens | null {
    const key = this.getStorageKey(this.TOKENS_KEY)
    const tokens = sessionStorage.getItem(key)

    if (tokens === null) {
      return null
    }

    try {
      return JSON.parse(tokens) as OAuth2Tokens
    }
    catch {
      // If the stored value is invalid JSON, remove it and treat as no tokens.
      sessionStorage.removeItem(key)

      return null
    }
  }

  public removeCodeVerifier(): void {
    sessionStorage.removeItem(this.getStorageKey(this.CODE_VERIFIER_KEY))
  }

  public removeTokens(): void {
    sessionStorage.removeItem(this.getStorageKey(this.TOKENS_KEY))
  }

  public setCodeVerifier(codeVerifier: string): void {
    sessionStorage.setItem(this.getStorageKey(this.CODE_VERIFIER_KEY), codeVerifier)
  }

  public setTokens(tokens: OAuth2Tokens): void {
    sessionStorage.setItem(this.getStorageKey(this.TOKENS_KEY), JSON.stringify(tokens))
  }
}
