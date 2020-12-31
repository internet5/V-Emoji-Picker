export interface IEmoji {
  /**
   * 动态表情时，data以http开头
   */
  data: string;
  category: string;
  aliases: string[];
}

export class Emoji implements IEmoji {
  constructor(
    public data: string,
    public category: string,
    public aliases: string[]
  ) { }
}
