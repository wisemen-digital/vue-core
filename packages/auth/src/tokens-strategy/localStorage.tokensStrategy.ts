import type { OAuth2Tokens } from '../apiClient'
import type {
  TokensStrategy,
} from './tokensStrategy.type'

export class LocalStorageTokensStrategy implements TokensStrategy {
  private CODE_VERIFIER_KEY = 'code_verifier'
  private TOKENS_KEY = 'tokens'

  constructor() {}
  public getCodeVerifier(): string | null {
    return localStorage.getItem(this.CODE_VERIFIER_KEY)
  }

  public getTokens(): OAuth2Tokens | null {
    const tokens = localStorage.getItem(this.TOKENS_KEY)

    if (tokens === null) {
      return null
    }

    return JSON.parse(tokens as string) as OAuth2Tokens
  }

  public removeCodeVerifier(): void {
    localStorage.removeItem(this.CODE_VERIFIER_KEY)
  }

  public removeTokens(): void {
    localStorage.removeItem(this.TOKENS_KEY)
  }

  public setCodeVerifier(codeVerifier: string): void {
    localStorage.setItem(this.CODE_VERIFIER_KEY, codeVerifier)
  }

  public setTokens(tokens: OAuth2Tokens): void {
    localStorage.setItem(this.TOKENS_KEY, JSON.stringify(tokens))
  }
}
