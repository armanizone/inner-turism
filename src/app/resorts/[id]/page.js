import { getResortById } from "../resort-store"
import { notFound } from "next/navigation"
import { ResortDetail } from "../resort-detail"

export default async function ResortDetailPage({ params }) {
  const { id } = await params
  const resort = getResortById(id)

  if (!resort) {
    notFound()
  }

  return <ResortDetail resort={resort} />
}
