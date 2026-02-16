import { mockResorts } from "./resort-data"

// In-memory store for resorts
let resorts = [...mockResorts]

export function getResorts() {
  return resorts
}

export function getResortById(id) {
  return resorts.find((r) => r.id === id)
}

export function addResort(resort) {
  const newResort = {
    ...resort,
    id: Date.now().toString(),
    createdAt: new Date(),
  }
  resorts = [newResort, ...resorts]
  return newResort
}

export function deleteResort(id) {
  resorts = resorts.filter((r) => r.id !== id)
}
