import React from 'react'
import { getAllNotes } from '@/lib/redis';
import EditButton from '../editButton';
import { Suspense } from 'react';
import NoteListSkeleton from './components/NoteListSkeleton';
import SidebarNoteList from './components/SidebarNoteList';
import SidebarSearchField from './components/SidebarSearchField';

export default async function Sidebar() {
  const notes = await getAllNotes()
  return (
    <>
      <section className="col sidebar text-center">
        <label className="offscreen" htmlFor="sidebar-search-input">
          Search for a note by title
        </label>
        <div className='flex items-center space-between'>
          <SidebarSearchField />
          <EditButton>New</EditButton>
        </div>
        <nav>
          <Suspense fallback={<NoteListSkeleton />}>
            <SidebarNoteList />
          </Suspense>
        </nav>
      </section>
    </>
  )
}
