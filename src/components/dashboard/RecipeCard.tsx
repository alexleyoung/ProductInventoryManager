import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Separator } from "@/components/ui/separator";

import { Recipe } from "@/lib/types";

// fill in item type later... item comes from AI but is unspecified,
// should make a type and refine prompt to include type def
const RecipeCard = ({ item }: { item: Recipe }) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Card className='hover:bg-accent transition-colors duration-300'>
          <CardHeader>
            <CardTitle>{item[0]}</CardTitle>
            <CardDescription>{item[1].description}</CardDescription>
          </CardHeader>
        </Card>
      </DialogTrigger>
      <DialogContent className='rounded-md'>
        <DialogHeader>
          <DialogTitle>{item[0]}</DialogTitle>
          <DialogDescription>{item[1].description}</DialogDescription>
        </DialogHeader>
        <div>
          <h2 className='font-semibold'>Ingredients</h2>
          <Separator className='my-2' />
          <ul>
            {item[1].ingredients.map((ingredient, i) => (
              <li key={i}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className='font-semibold'>Steps</h2>
          <Separator className='my-2' />
          <ol>
            {item[1].steps.map((step, i) => (
              <li key={i}>{i + 1 + ". " + step}</li>
            ))}
          </ol>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RecipeCard;

{
  /* <h2>Ingredients</h2>
        <ul>
          {item[1].ingredients.map((ingredient, i) => (
            <li key={i}>{ingredient}</li>
          ))}
        </ul>
        <Separator />
        <h2>Steps</h2>
        <ol>
          {item[1].steps.map((step, i) => (
            <li key={i}>{i + 1 + ". " + step}</li>
          ))}
        </ol> */
}
