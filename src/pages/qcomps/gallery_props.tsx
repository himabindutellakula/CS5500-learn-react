import { AvatarProps } from "@/types/avatar";

import { GalleryProps } from "@/types/gallery";

function Avatar({ person, size }: AvatarProps) {
  return (
    <img
      className="avatar"
      src={'https://i.imgur.com/' + person.imageId + 's.jpg'}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

// Reusable ListItem Component
function ListItem({ label, value, count }: { label: string; value: string, count?: number }) {
  return (
    <li>
      <b>{label}: </b>
      {count !== undefined ? <b>{count}</b> : null} {value}
    </li>
  );
}

function GalleryProfile({ scientist, size }: GalleryProps) {
  return (
    <section className="profile">
      <h2>{scientist.name}</h2>
      <Avatar
        person={{ name: scientist.name, imageId: scientist.imageId }}
        size={size} />
      <ul>
        <ListItem label="Profession" value={scientist.profession} />
        <ListItem label="Awards" value={scientist.awards} count={scientist.awards.split(",").length}/>
        <ListItem label="Discovered" value={scientist.discovery} />
      </ul>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <GalleryProfile scientist={{
        name: 'Maria Skłodowska-Curie',
        imageId: 'szV5sdG',
        profession: 'physicist and chemist',
        awards: '(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)',
        discovery: 'polonium (element)'
      }}
        size={70}
      ></GalleryProfile>
      <GalleryProfile scientist={{
        name: 'Katsuko Saruhashi',
        imageId: 'YfeOqp2',
        profession: 'geochemist',
        awards: '(Miyake Prize for geochemistry, Tanaka Prize)',
        discovery: 'a method for measuring carbon dioxide in seawater'
      }}
        size={70}
      ></GalleryProfile>
    </div>
  );
}
