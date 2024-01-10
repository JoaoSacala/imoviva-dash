import { z } from "zod";
import { schemaFormApartment, schemaFormCommercial, schemaFormGround, schemaFormHouse } from "../Schemas/FormSchema";

export type FormApartmentProps = z.infer<typeof schemaFormApartment>
export type FormHouseProps = z.infer<typeof schemaFormHouse>
export type FormCommercialProps = z.infer<typeof schemaFormCommercial>
export type FormGroundProps = z.infer<typeof schemaFormGround>

