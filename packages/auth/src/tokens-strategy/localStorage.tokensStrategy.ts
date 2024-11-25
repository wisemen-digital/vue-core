import type { OAuth2Tokens } from '../apiClient'
import type {
  TokensStrategy,
  TokensStrategySetCodeVerifierOptions,
  TokensStrategySetTokensOptions,
} from './tokensStrategy.type'

export const CODE_VERIFIER_KEY = 'code_verifier'
export const LOCAL_STORAGE_KEY = 'tokens'

function getTokens(key: string): OAuth2Tokens | null {
  const tokens = localStorage.getItem(key)

  if (tokens === null) {
    return null
  }

  return JSON.parse(tokens as string) as OAuth2Tokens
}

function removeTokens(key: string): void {
  localStorage.removeItem(key)
}

function setTokens({ key, tokens }: TokensStrategySetTokensOptions): void {
  localStorage.setItem(key, JSON.stringify(tokens))
}

function setCodeVerifier({ codeVerifier, key }: TokensStrategySetCodeVerifierOptions): void {
  localStorage.setItem(key, codeVerifier)
}

function removeCodeVerifier(key: string): void {
  localStorage.removeItem(key)
}

function getCodeVerifier(key: string): string | null {
  return localStorage.getItem(key)
}

export const localStorageTokensStrategy: TokensStrategy = {
  getCodeVerifier: () => getCodeVerifier(CODE_VERIFIER_KEY),
  getTokens: () => getTokens(LOCAL_STORAGE_KEY),
  removeCodeVerifier: () => removeCodeVerifier(CODE_VERIFIER_KEY),
  removeTokens: () => removeTokens(LOCAL_STORAGE_KEY),
  setCodeVerifier: (codeVerifier: string) => setCodeVerifier({ codeVerifier, key: CODE_VERIFIER_KEY }),
  setTokens: (tokens: OAuth2Tokens) => setTokens({ key: LOCAL_STORAGE_KEY, tokens }),
}
