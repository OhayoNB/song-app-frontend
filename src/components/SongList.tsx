import { useEffect, useState } from "react"
import { Song } from "../models/Song"
import { songService } from "../services/song.service"

export const SongList = () => {
    const [songs, setSongs] = useState<Song[]>([])
    const [sortedSongs, setSortedSongs] = useState<Song[]>([]);
    const [sortOrder, setSortOrder] = useState('asc');

    useEffect(() => {
        try {
            songService.getAll().then(songs => {
                setSongs(songs)
            })
        } catch (err) {
            console.error('Error getting songs', err)
        }
    }, [])

    useEffect(() => {
        const sortedSongs = songs.slice().sort((a, b) => {
          if (sortOrder === 'asc') {
            return a.band.localeCompare(b.band);
          } else {
            return b.band.localeCompare(a.band);
          }
        });
        setSortedSongs(sortedSongs);
      }, [songs, sortOrder]);

    const toggleSortOrder = () => {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
      };

  return (
    <section className="song-list">
        <table className="song-table">
        <thead>
          <tr>
            <th className="table-order" onClick={toggleSortOrder}>Band</th>
            <th>Title</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {sortedSongs.map((song, index) => (
            <tr key={index}>
              <td>{song.band}</td>
              <td>{song.songName}</td>
              <td>{song.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}