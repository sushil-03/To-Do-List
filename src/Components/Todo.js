import React ,{Component} from 'react'
import './Todo.css'
class Todo extends Component{
    constructor(){
        super();
        this.state={
            tasks:[],
            currTask:''
        }
    } 
    handleChange =(e)=>{
        console.log(e.target.value)
        this.setState({
            currTask:e.target.value
        })
    }
    handleSubmit =()=>{
        if(this.state.currTask!=""){
            this.setState({
                tasks:[...this.state.tasks,{task:this.state.currTask,id: this.state.tasks.length}],
                currTask:''
            })
        }
         
    }
    handleDelete=(id)=>{
        let narr=this.state.tasks.filter((task)=>{
            return task.id!==id;
         })
        this.setState({
            tasks:[...narr]
        })
    }
    render(){
        return(
            <div className="container">
                <div className="inputTask">
                      <input type="text" value={this.state.currTask} onChange={this.handleChange} placeholder="Input your to do list"/>
                <button type="submit" className="btn btnSubmit"onClick={this.handleSubmit}>Submit</button>
                </div>
              
                <ul className="Allist">
                {
                    this.state.tasks.length==0?
                    <li>
                        <p>No Thing To Do 😔</p>
                    </li>:

                    
                    this.state.tasks.map((ObjTask)=>{
                        return(
                            <li className="list" key={ObjTask.id}>
                                <p className="text">{ObjTask.task}</p>
                                <button className="btn btnDelete"onClick={()=>this.handleDelete(ObjTask.id)} >Delete</button>
                            </li>
                        )

                    })
                } 
                </ul>
               
            </div>
        );
    }
}
export default Todo;