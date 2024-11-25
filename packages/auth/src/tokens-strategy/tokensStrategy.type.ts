import type { OAuth2Tokens } from '../apiClient'

export interface TokensStrategySetTokensOptions {
  key: string
  tokens: OAuth2Tokens
}

export interface TokensStrategySetCodeVerifierOptions {
  codeVerifier: string
  key: string
}
export interface TokensStrategy {
  getCodeVerifier: () => string | null
  getTokens: () => OAuth2Tokens | null
  removeCodeVerifier: () => void
  removeTokens: () => void
  setCodeVerifier: (codeVerifier: string) => void
  setTokens: (tokens: OAuth2Tokens) => void
}
