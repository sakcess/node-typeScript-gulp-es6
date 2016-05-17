export class IronMan
{
  private firstName:string = 'Tony';

  status()
  {
    console.log('Jarvis: Sir, Mark VII is not ready for deployment');
  }

  attack()
  {
    console.log('Flight suit up... Shawarma  after');
    this.firstName = 'TinMan';
  }
}
