<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Main extends CI_Controller {
	function __construct()
	{
		parent:: __construct();
		$this->load->helper('url');
		$this->load->helper('form');
		$this->load->library('email');

	}

	public function index()
	{
		$this->load->view('main/index.php');

	}
	public function consult(){
		$name = $this->input->post('fio');
		$phone = $this->input->post('phone');
		

		$config['mailtype'] = 'text';
		$this->email->initialize($config);

		$this->email->clear();
	    $this->email->to('semenzuev777@gmail.com');
	    $this->email->from('ecoproect.ru');
	    $this->email->subject('Новая заявка!');
	    $this->email->message("Привет!\nПоступила заявка от\nИмя: ".$name."\nТелефон: ".$phone.".");
	    $this->email->send();
	    redirect('/main/zbs', 'refresh');
	}
	public function zbs(){
		
		$this->load->view('main/index.php');
		$this->load->view('main/zbs.php');

	}

	public function callback(){
		$name = $this->input->post('fio');
		$phone = $this->input->post('phone');
		$txt = $this->input->post('txt');

		$config['mailtype'] = 'text';
		$this->email->initialize($config);

		$this->email->clear();
	    $this->email->to('semenzuev777@gmail.com');
	    $this->email->from('ecoproect.ru');
	    $this->email->subject('Обратный звонок!');
	    $this->email->message("Привет!\nПерезвоните человеку\nИмя: ".$name."\nТелефон: ".$phone."\nСообщение: ".$txt.".");
	    $this->email->send();
	    redirect('/main/zbs', 'refresh');
	}

}