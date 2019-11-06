export default albums =>
  albums.map(album => {
    const newPhotoElements = album.photoElements.map(
      ({ src, caption, tw, th }) => {
        const thumbnail = `${src.slice(0, src.length - 4)}t${src.slice(
          src.length - 4,
        )}`;
        return {
          src,
          thumbnail,
          thumbnailWidth: tw || 0,
          thumbnailHeight: th || 0,
          caption,
        };
      },
    );
    return { title: album.title, photoElements: newPhotoElements };
  });
