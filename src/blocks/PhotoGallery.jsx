import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function PhotoGallery() {
  return (
    <div>
        <ImageList variant="woven" cols={2} gap={8} rowHeight={300}>
  
  <ImageListItem >
    <img
      src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=821&q=80"
       alt="imagen1"   
    />
  </ImageListItem>
  <ImageListItem >
    <img
      src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
       alt="viaje"   
    />
  </ImageListItem>
  <ImageListItem >
    <img
      src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=383&q=80"
       alt="venecia"   
    />
  </ImageListItem>
  <ImageListItem >
    <img
      src="https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
       alt="greece"   
    />
  </ImageListItem>
  <ImageListItem >
    <img
      src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"
       alt="italy"   
    />
  </ImageListItem>
  <ImageListItem >
    <img
      src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
       alt="sea"   
    />
  </ImageListItem>

</ImageList>
    </div>
  )
}

export default PhotoGallery