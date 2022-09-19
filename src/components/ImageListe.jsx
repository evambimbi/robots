import Loading from "./Loading";
import Image from "./Image"

const ImageListe = ({ListImage , isLoading}) => {
  return (
  <div className="row image-list row-cols-1 row-cols-sm-2 row-cols-md-4 justify-content-center">
{ ListImage.length === 0 && isLoading ?(
 <Loading />
): ListImage.length === 0 && isLoading ?(
<p className="news"> Aucune information trouvée! </p>): 
  ListImage.map((user) => {
   return <Image user={user} key={user.id} id= 
     {user.id}/> })
 }
</div> 
)  
}
export default ImageListe;