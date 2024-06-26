export type IThought = {
  id: number,
  content: string,
  authorShip: string,
  type: ModelType,
  isFavorite: boolean
}

type ModelType = "modelo1" | "modelo2" | "modelo3"

export type INewThought = Omit<IThought, "id">;
