'use server'

import { redirect } from 'next/navigation'
import {addNote, updateNote, delNote} from '@/lib/redis';

export async function saveNote(noteId, title, body) {
  
  const data = JSON.stringify({
    title,
    content: body,
    updateTime: new Date()
  })

  if (noteId) {
    updateNote(noteId, data)
    redirect(`/note/${noteId}`)
  } else {
    const res = await addNote(data)
    redirect(`/note/${res}`)
  }

}

export async function deleteNote(noteId) {
  delNote(noteId)
  redirect('/')
}
