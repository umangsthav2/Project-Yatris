<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Symfony\Component\Console\Input\Input;

use function PHPSTORM_META\type;

class UserController extends Controller
{
        public function signup(Request $req) //CREATE
        {
            $users = new User;
            // $users->incrementing('id');
            // $users->name=$req['email'];
            $users->name=$req->name;
            $users->username=$req->username;
            $users->email=$req->email;
            $users->password=$req->password;
            $users->save();
            return response()->json(['message'=>'Account created successfully'],201);
            
        }
    
    public function signin(Request $req) //READ
        {
            $users= new User;

            $result_count = count($users->where('username',$req['username'])->get()) ;
            if($result_count==0)
                {
                    return response()->json(['status'=>"Account not found"],404);
                }
            else if($result_count==1)
                {
                    $auth = count($users->where('username',$req['username'])->where('password',$req['password'])->get());
                    if($auth==1)
                        {
                            return response()->json(["status"=>"Login Successful"],200);
                        }
                    else
                        {
                            return response()->json(["status"=>"Password Incorrect"],403);
                        }
                }
        }
    
    public function edit(Request $resp) //UPDATE
        {
            $users= new User;
            $data = $users->where(['id'])->update();
            return response()->json($data);
        } 

    public function delete() //DELETE
        {

        }

    public function showall()
        {
            $test = new User;
            return response()->json($test->all());
        }
}
