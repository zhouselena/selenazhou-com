const isGHPages = window.location.hostname.includes('github.io');
const BASE = isGHPages ? '/selenazhou-com/' : '/';

export const ROUTES = {
  HOME: `${BASE}`,
  PROJECTS: `${BASE}projects`,
  EXPERIENCE: `${BASE}experience`,
  CONTACT: `${BASE}contact`,
};