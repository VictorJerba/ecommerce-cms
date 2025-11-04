import { Edit, EditIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { useLocation, useNavigate } from "react-router-dom";

type DataTableActionsProps = {
 itemId: string   | number; 
}

export function HandleNavigateToId(
    {itemId}:
     DataTableActionsProps) {

    const location = useLocation();
    const navigate = useNavigate();

    function handleShowForm() {
        const path = location.pathname;
        navigate ('${path}/${itemId}');
        
    }
    return (<Tooltip>
  <TooltipTrigger asChild>
    <Button
    variant='outline'
    size='icon'
    onClick={HandleNavigateToId}
    >
        <EditIcon  />
    </Button>
  </TooltipTrigger>
  <TooltipContent>
    <p>Editar/remover registro</p>
  </TooltipContent>
</Tooltip>)
}