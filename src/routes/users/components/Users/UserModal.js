import  React,{Component} from 'react';
import {Modal,Form,Input} from 'antd';

const FormItem=Form.Item;
class UserEditModal extends Component{
  constructor(...props){
    super(...props);
    this.state={
      visible:false,
    }
  };
  showModelHander= e => {
    if(e)e.stopPropagation();
    this.setState({
      visible:true,
    });
  };

  hideModelHander= ()=>{
    this.setState({
      visible:false,
    });
  };

  okHander=()=>{
    const {onOk}=this.props;
    this.props.form.validateFields((err,values)=>{
      if(!err){
        onOk(values);
        this.hideModelHander();
      }
    });
  };

  render(){
    const {children}=this.props;
    const {getFieldDecorator}=this.props.form;
    const {name,email,website}=this.props.record;
    const formItemLayout={
      labelCol:{span:6},
      wrapperCol:{span:14}
    };
    return (
      <span>
        <span onClick={this.showModelHander}>{children}</span>
        <Modal  onOk={this.okHander} onCancel={this.hideModelHander} visible={this.state.visible} title="Edit User" >
          <Form  layout="horizontal" onSubmit={this.okHander} >
            <FormItem {...formItemLayout} label="name">
              {getFieldDecorator('name',{
                initialValue:name,
              })(<Input/>)}

            </FormItem>
             <FormItem {...formItemLayout} label="Email">
              {getFieldDecorator('email', {
                initialValue: email,
              })(<Input />)}
            </FormItem>
            <FormItem {...formItemLayout} label="Website">
              {getFieldDecorator('website', {
                initialValue: website,
              })(<Input />)}
            </FormItem>
          </Form>
        </Modal>
      </span>
    );

  }

}

export  default Form.create()(UserEditModal);
