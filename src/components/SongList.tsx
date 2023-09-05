import { useEffect, useState } from "react"
import { Song } from "../models/Song"
import { songService } from "../services/song.service"

export const SongList = () => {
    const [songs, setSongs] = useState<Song[]>([])

    useEffect(() => {
        try {
            songService.getAll().then(songs => {
                console.log('songs', songs)
                setSongs(songs)
            })
        } catch (err) {
            console.error('Error getting songs', err)
        }
    }, [])
  return (
    <section className="song-list">
        song list
    </section>
  )
}