// autobind decorator
function autobind(
  _: any,
  _2: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    }
  };
  return adjDescriptor;
}
class ProjectInput {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLFormElement;
    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;
  
    constructor() {
      this.templateElement = document.getElementById(
        'project-input'
      )! as HTMLTemplateElement;
      this.hostElement = document.getElementById('app')! as HTMLDivElement;
  
      const importedNode = document.importNode(
        this.templateElement.content,
        true
      ); // Get the content in the templeteElement
      this.element = importedNode.firstElementChild as HTMLFormElement;
      this.element.id = 'user-input'
      this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement
      this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement
      this.peopleInputElement = this.element.querySelector('#people') as HTMLInputElement
      
      this.configure();
      this.attach();
    }

    private submitHandler(event: Event) {
      event.preventDefault();
      console.log('[Value of the submit]: ', this.titleInputElement.value);

    }

    @autobind
    private configure() {
      this.element.addEventListener('submit', this.submitHandler)// binding using this in this context to the submitHandler function
    }
  
    private attach() {
      this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}
  
  const prjInput = new ProjectInput();
  